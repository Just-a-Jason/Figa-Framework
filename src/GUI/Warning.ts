import { FigaComponentProps } from "../Types/FigaComponentProps";
import { FigaUITemplate } from "../Types/FigaUITemplate";
import { create, cssClass, extend } from "../Core/Figa";
import FigaComponent from "../Core/FigaComponent";
import { Link } from "../Core/Router";
//import "./Warning.scss";

export default class Warning extends FigaComponent {
  public constructor(text: string) {
    super();

    (this.body.element as HTMLParagraphElement).textContent = text + "⚠️";
    extend(
      this.body.element as HTMLElement,
      new Link("Go back to home page", "/")
    );
  }

  protected template(): FigaUITemplate<FigaComponentProps> {
    const p = create("p");
    cssClass(p, "figa-warning");
    return { element: p };
  }
}
