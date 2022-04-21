import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';



const Cell = ({ type }) => (
    <StyledCell type={type} color={TETROMINOS[type].color}>1</StyledCell>
)

export default Cell;
