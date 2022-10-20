import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Character } from "./components/Character";
import { ListCharacters } from "./components/ListCharacters";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListCharacters />} />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
    </BrowserRouter>
  );
};