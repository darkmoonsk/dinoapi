import { describe, it, expect } from "vitest";
import app from "../src/app";

describe("Index Test", () => {
  it("should create an instance of the application", () => {
    expect(app).to.exist;
  });
});
