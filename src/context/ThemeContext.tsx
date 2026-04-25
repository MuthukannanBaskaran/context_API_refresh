import { createContext } from "react"
import type { User } from "../types/types";

const ThemeContext = createContext<User[]>([]);
export default ThemeContext;