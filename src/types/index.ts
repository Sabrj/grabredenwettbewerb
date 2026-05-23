export interface NavLink {
  href: string;
  label: string;
}

export interface Partner {
  id: string;
  icon: string;
  name: string;
  description: string;
}

export interface ArchiveEntry {
  id: string;
  figureName: string;
  bookTitle: string;
  bookAuthor: string;
  description: string;
  speechAuthor: string;
  speechLink?: string;
}

export interface ArchiveYear {
  year: number;
  entries: ArchiveEntry[];
}
