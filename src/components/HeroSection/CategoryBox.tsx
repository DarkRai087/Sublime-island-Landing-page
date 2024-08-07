'use client';

import qs from 'query-string';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import React from 'react';
// import { IconType } from 'react-icons';

function CategoryBox({ IconType: Icon, label, selected }) {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery = {
      ...currentQuery,
      category: label,
    };

    if (params?.get('category') === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: '/',
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, router, params]);

  return (
    <div
      onClick={handleClick}
      className={`
        flex 
        cursor-pointer 
        flex-col 
        items-center 
        justify-center
        gap-2
        border-b-2
        p-3
        transition
        hover:text-slate-400
        ${selected ? 'border-b-white border-b-2' : 'border-transparent'}
        ${selected ? 'text-slate-50' : 'text-slate-50'}
      `}
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
}

export default CategoryBox;
