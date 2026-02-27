"use client";

import { useEffect, useState } from "react";
import { getCases } from "@/services/casesService";
import type { CaseApiItem } from "@/schemas/case.schema";

export function useCases() {
  const [cases, setCases] = useState<CaseApiItem[]>([]);

  useEffect(() => {
    getCases().then(setCases).catch(() => setCases([]));
  }, []);

  return { cases };
}

// busca os cases, salva o estado e devolve pronto para uso