"use client";

import React from "react";
import { CategoryVisibilityProvider } from "@/context/CategoryVisibilityContext";
import CategoryPage from "@/components/ui/templates/CategoryPage";
import { middleFields } from "@/lib/categoryDatas";

const MiddlePage = () => {
  const endpoint = "/api/save-middle";

  return (
    <CategoryVisibilityProvider majorCategory={true} middleCategory={false}>
      <CategoryPage
        title="중분류"
        headerTitle="중분류 코드관리"
        fields={middleFields}
        endpoint={endpoint}
      />
    </CategoryVisibilityProvider>
  );
};

export default MiddlePage;
