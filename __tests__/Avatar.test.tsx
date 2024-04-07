import { render, screen } from "@testing-library/react-native";
import Avatar from "@/components/Avatar";

describe("Avatar Component", () => {
  it("Should render image and not the text", () => {
    render(
      <Avatar
        avatarTitle="Avatar"
        avatarImg="https://github.com/marcusfreitasantos.png"
      />
    );

    const avatarImg = screen.queryByTestId("avatar__img");
    expect(avatarImg).toBeTruthy();

    const avatarText = screen.queryByTestId("avatar__text");
    expect(avatarText).toBeNull();
  });

  it("Should render text and not the image", () => {
    render(<Avatar avatarTitle="Avatar" />);

    const avatarImg = screen.queryByTestId("avatar__img");
    expect(avatarImg).toBeNull();

    const avatarText = screen.queryByTestId("avatar__text");
    expect(avatarText).toBeTruthy();
  });
});
