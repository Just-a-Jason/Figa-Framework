import FigaComponent from "./FigaComponent";
import { RouterOptions } from "../Core/Router";

export default abstract class FigaScreen extends FigaComponent {
  public rendered(): void {}

  public routerTransition(): RouterOptions | null {
    return null;
  }

  public refresh(): void {
    this.body = this.template();
  }
}
