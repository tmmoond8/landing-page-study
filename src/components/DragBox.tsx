import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export default function DragBox() {
  const constraintsRef = React.useRef(null);

  return (
    <Wrapper>
      <Container>
        <DragArea className="drag-area" ref={constraintsRef} />
        <Box drag dragConstraints={constraintsRef} />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 500px;
  background: linear-gradient(180deg, #9c1aff 0%, rgb(119, 0, 255) 100%);
`;

const Container = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 30px;
  top: calc(50% - 150px);
  left: calc(50% - 150px);
`;

const DragArea = styled(motion.div)`
  background: #00000020;
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 30px;
  top: calc(50% - 150px);
  left: calc(50% - 150px);
`;

const Box = styled(motion.div)`
  background: white;
  border-radius: 30px;
  width: 150px;
  height: 150px;
  position: absolute;
  z-index: 1000;
  top: calc(50% - 150px / 2);
  left: calc(50% - 150px / 2);
`;
