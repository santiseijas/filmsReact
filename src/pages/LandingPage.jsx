import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";

export function LandingPage() {
    return (
        <div>
            <Search></Search>
            <MoviesGrid></MoviesGrid>
        </div>
    );
}
