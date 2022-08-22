import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export default function DragBox() {
  const constraintsRef = React.useRef(null);

  return (
    <Container>
      <DragArea className="drag-area" ref={constraintsRef} />
      <Box drag dragConstraints={constraintsRef} />
    </Container>
  );
}

const Container = styled.div`
  opacity: 0.2;
  background: red;
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 30px;
  top: calc(50% - 150px);
  left: calc(50% - 150px);
`;

const DragArea = styled(motion.div)`
  opacity: 0.2;
  background: red;
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 30px;
  top: calc(50% - 150px);
  left: calc(50% - 150px);
`;

const Box = styled(motion.div)`
  background-color: white;
  width: 100px;
  height: 100px;
`;
