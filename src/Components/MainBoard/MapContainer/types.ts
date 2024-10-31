export interface DrawButtonProps {
  isDraw: boolean;
  handleDrawChange: () => void
}

export interface ButtonProps {
  text: string;
  icon: string;
}

export interface ZoomButtonsProps {
  zoomIn: () => void;
  zoomOut: () => void;
}