import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import CategoryBar from "./CategoryBar.jsx";
import { MemoryRouter } from "react-router-dom";
import Gallery from "./Gallery.jsx";

describe("CategoryBar", () => {
  it("wywołuje onWybierz z poprawną kategorią po kliknięciu", async () => {
    const onWybierz = vi.fn();
    render(<CategoryBar aktywna="wszystkie" onWybierz={onWybierz} />);

    await userEvent.click(screen.getByRole("button", { name: "Góry" }));

    expect(onWybierz).toHaveBeenCalledWith("gory");
  });

  it("oznacza aktywną kategorię przez aria-pressed", () => {
    render(<CategoryBar aktywna="gory" onWybierz={() => {}} />);

    expect(screen.getByRole("button", { name: "Góry" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("button", { name: "Morze" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });

  it("nie renderuje żadnej karty dla pustej listy", () => {
    render(
      <MemoryRouter>
        <Gallery zdjecia={[]} onUsun={() => {}} onPrzelacz={() => {}} />
      </MemoryRouter>,
    );

    expect(screen.queryAllByRole("link", { name: "Powiększ" })).toHaveLength(0);
  });
});
