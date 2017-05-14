import { AppWin } from "app/components/base-window.component";

export class WinDragging {
  public static isDragging = false;

  public static dragMouseOffsetX = 0;
  public static dragMouseOffsetY = 0;
  public static currentWin: AppWin;
}