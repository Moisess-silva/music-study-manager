import {
  Component,
  type ReactNode,
} from "react";

interface Props {

  children: ReactNode;
}

interface State {

  hasError: boolean;
}

export class ErrorBoundary
  extends Component<Props, State> {

  constructor(props: Props) {

    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {

    return {
      hasError: true,
    };
  }

  render() {

    if (this.state.hasError) {

      return (

        <div
          className="
            min-h-screen
            flex
            items-center
            justify-center
            bg-zinc-950
            text-white
            p-6
          "
        >

          <div
            className="
              text-center
            "
          >

            <h1
              className="
                text-3xl
                font-bold
                mb-4
              "
            >

              Algo deu errado

            </h1>

            <p
              className="
                text-zinc-400
              "
            >

              Recarregue a página.

            </p>

          </div>

        </div>
      );
    }

    return this.props.children;
  }
}