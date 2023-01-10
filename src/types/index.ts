export interface Player {
  id?: number | null;
  first_name?: string | null;
  height_feet?: number | null;
  height_inches?: number | null;
  last_name?: string | null;
  position?: string | null;
  team?: {
    id: number | null;
    abbreviation: string | null;
    city: string | null;
    conference: string | null;
    division: string | null;
    full_name: string | null;
    name: string | null;
  };
  weight_pounds?: number | null;
}

export interface Players extends Player {}

export interface MetaDetails {
  total_pages?: number;
  current_page?: number;
  next_page?: number;
  per_page?: number;
  total_count?: number;
}
