import { SignUpValueType, SignValueType } from '@/types/signType';
import React from 'react';
import type { FieldErrors } from 'react-hook-form';

type SignErrorProps = {
  errors: FieldErrors<SignUpValueType>;
  id: keyof SignUpValueType;
};
export default function SignError({ errors, id }: SignErrorProps) {
  return (
    <div>
      {errors[id]?.message && (
        <p className="text-left text-14 text-red">{errors[id]?.message}</p>
      )}
    </div>
  );
}
