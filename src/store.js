import { create } from "zustand";

export const useStore = create((set) => ({
  search: "",
  setSearch: (search) => set({ search }),

  category: "",
  setCategory: (category) => set({ category }),

  sort: "",
  setSort: (sort) => set({ sort }),

  page: 1,
  setPage: (page) => set({ page }),

  productsPerPage: 3,
}));
