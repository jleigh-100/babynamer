import React, { useEffect, useState } from 'react';
import { Heart, X, RotateCcw, Share } from 'lucide-react';
import {
  Container, AppWrapper, Title, CardContainer, Card, BackgroundCard, NameText,
  BackgroundNameText, SwipeIndicator, ButtonContainer, ActionButton, ProgressContainer,
  ProgressBar, ProgressFill, ProgressText, LikedNamesContainer, LikedNamesTitle, EmptyState,
  NamesGrid, NameTag, FinishedContainer, FinishedCard, FinishedTitle, FinishedText, Button,
  MatchedName,
  MatchedNamesContainer
} from './BabyNamesSwipe.styled.jsx';


// const babyNames = [
//   'Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Ethan', 'Isabella', 'Mason',
//   'Sophia', 'William', 'Charlotte', 'James', 'Amelia', 'Benjamin', 'Mia',
//   'Lucas', 'Harper', 'Henry', 'Evelyn', 'Alexander', 'Abigail', 'Michael',
//   'Emily', 'Daniel', 'Elizabeth', 'Jacob', 'Sofia', 'Logan', 'Avery', 'Jackson',
//   'Ella', 'Levi', 'Madison', 'Sebastian', 'Scarlett', 'Mateo', 'Victoria',
//   'Jack', 'Aria', 'Owen', 'Grace', 'Theodore', 'Chloe', 'Aiden', 'Camila',
//   'Samuel', 'Penelope', 'Joseph', 'Riley', 'John'
// ];

const babyNames = [
"Ronald",
"Richard",
"Barry",
"Rupert",
"Lionel",
"Charles",
"Charlie",
"Michael",
"Austin",
"Stuart",
"Robert",
"Edwin",
"Ian",
"John",
"Andrew",
"Taylor",
"Cyril",
"Lucas",
"Tate",
"Logan",
"James",
"Henry",
"Harry",
"Daniel",
"David",
"Jamie",
];

const BabyNamesSwipe = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedNames, setLikedNames] = useState([]);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [partnerSelectedList, setPartnerSelectedList] = useState([]);
  const [showCopyToClipboard, setShowCopyToClipboard] = useState(false)

  useEffect(() => {
    const b64dList = window.location.href.split('/').pop();
    if (b64dList) {
      const urlUnsafeB64 = b64dList.replace(/-/g, '+').replace(/_/g, '/');
      const incomingList = Buffer.from(urlUnsafeB64, 'base64').toString().replace(/"/g, '');
      setPartnerSelectedList(incomingList.split(','));
    }
  }, [])

  const handleSwipe = (direction) => {
    if (currentIndex >= babyNames.length) return;

    if (direction === 'right') {
      setLikedNames(prev => [...prev, babyNames[currentIndex]]);
    }

    setCurrentIndex(prev => prev + 1);
    setDragOffset(0);
    setIsDragging(false);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    const startX = e.clientX;
    let currentOffset = 0;
    
    const handleMouseMove = (e) => {
      const currentX = e.clientX;
      const diff = currentX - startX;
      currentOffset = Math.max(-200, Math.min(200, diff));
      setDragOffset(currentOffset);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      if (Math.abs(currentOffset) > 100) {
        handleSwipe(currentOffset > 0 ? 'right' : 'left');
      } else {
        setDragOffset(0);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
    const startX = e.touches[0].clientX;
    let currentOffset = 0;
    
    const handleTouchMove = (e) => {
      const currentX = e.touches[0].clientX;
      const diff = currentX - startX;
      currentOffset = Math.max(-200, Math.min(200, diff));
      setDragOffset(currentOffset);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      if (Math.abs(currentOffset) > 100) {
        handleSwipe(currentOffset > 0 ? 'right' : 'left');
      } else {
        setDragOffset(0);
      }
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  const resetApp = () => {
    setCurrentIndex(0);
    setLikedNames([]);
    setDragOffset(0);
    setIsDragging(false);
    setShowCopyToClipboard(false);
  };

  const handleShare = () => {
    const stringifiedList = JSON.stringify(likedNames.join(','));
    const b64dList = Buffer.from(stringifiedList).toString('base64');
    const urlSafeB64dList = b64dList.replace(/\+/g, '-').replace(/\//g, '_');
    setShowCopyToClipboard(true)
    navigator.clipboard.writeText(`${window.location.origin}/${urlSafeB64dList}`)
  }

  const currentName = babyNames[currentIndex];
  const isFinished = currentIndex >= babyNames.length;

  const matchingNames = [...new Set(partnerSelectedList).intersection(new Set(likedNames))]

  return (
    <Container>
      <AppWrapper>
        <Title>Baby Names 💕</Title>
        
        <CardContainer>
          {isFinished ? (
            <FinishedContainer>
              <FinishedCard>
                <FinishedTitle>All Done! 🎉</FinishedTitle>
                <FinishedText>
                  You've gone through all {babyNames.length} names
                </FinishedText>
                {partnerSelectedList.length > 0 ? (
                  <div>
                    <h1>Matching names</h1>
                    <h2>These are the names you both agreed on!</h2>
                  <MatchedNamesContainer>
                    {matchingNames.map((name) => <MatchedName key={name}>{name}</MatchedName>)}
                  </MatchedNamesContainer>
                  </div>
                )
                :
                <>
                  <Button onClick={() => handleShare()}><Share size={40}/>Share with a partner</Button>
                  {showCopyToClipboard && <p>Link copied! Paste it in a message to them and see which names you both like!</p>}
                  <Button onClick={resetApp}>
                    <RotateCcw size={40} />
                    Start Over
                  </Button>
                  </>
                }
              </FinishedCard>
            </FinishedContainer>
          ) : (
            <>
              {currentIndex + 1 < babyNames.length && (
                <BackgroundCard>
                  <BackgroundNameText>
                    {babyNames[currentIndex + 1]}
                  </BackgroundNameText>
                </BackgroundCard>
              )}
              
              <Card
                dragOffset={dragOffset}
                isDragging={isDragging}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
              >
                <NameText>{currentName}</NameText>
                
                {dragOffset > 50 && (
                  <SwipeIndicator direction="right">LIKE</SwipeIndicator>
                )}
                {dragOffset < -50 && (
                  <SwipeIndicator direction="left">NOPE</SwipeIndicator>
                )}
              </Card>
            </>
          )}
        </CardContainer>

        {!isFinished && (
          <ButtonContainer>
            <ActionButton variant="reject" onClick={() => handleSwipe('left')}>
              <X size={100} />
            </ActionButton>
            <ActionButton variant="accept" onClick={() => handleSwipe('right')}>
              <Heart size={100} />
            </ActionButton>
          </ButtonContainer>
        )}

        <ProgressContainer>
          <ProgressBar>
            <ProgressFill progress={(currentIndex / babyNames.length) * 100} />
          </ProgressBar>
          <ProgressText>
            {currentIndex} of {babyNames.length} names
          </ProgressText>
        </ProgressContainer>

        {!isFinished && (
          <LikedNamesContainer>
          <LikedNamesTitle>
            <Heart color="#ef4444" size={20} />
            Liked Names ({likedNames.length})
          </LikedNamesTitle>
          
          {likedNames.length === 0 ? (
            <EmptyState>
              No names liked yet. Start swiping right! 👉
            </EmptyState>
          ) : (
            <NamesGrid>
              {likedNames.map((name, index) => (
                <NameTag key={index}>
                  {name}
                </NameTag>
              ))}
            </NamesGrid>
          )}
        </LikedNamesContainer>
        )}
      </AppWrapper>
    </Container>
  );
};

export default BabyNamesSwipe;