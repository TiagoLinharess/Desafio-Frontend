/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { StyledInput } from './styles';

export default function Input({ name, type, maxLength }) {
  const inputRef = useRef(null);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <StyledInput
      ref={inputRef}
      type={type}
      maxLength={maxLength}
    />
  );
}
