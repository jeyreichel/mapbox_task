export interface ArrButtonProps {
  icon: string,
  isActive: boolean,
  onClick: () => void
}

export interface SearchListHeaderProps {
  onSortToggle: () => void;
  listLength: number | undefined
}