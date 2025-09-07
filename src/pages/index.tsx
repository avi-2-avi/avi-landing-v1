import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

import { useTheme } from "next-themes";

import {
  EmailOutlined,
  LinkedIn,
  Telegram,
  LocalLibraryOutlined,
  SchoolOutlined,
  ComputerOutlined,
  CoffeeMakerOutlined,
  FitnessCenterOutlined,
  TwoWheelerOutlined,
} from "@mui/icons-material";

import Layout from "../components/Layout";
import CheckCard from "@/components/CheckCard";

// Game of Life component
const GameOfLifeGrid = () => {
  const [grid, setGrid] = useState<number[][]>([]);
  const [generation, setGeneration] = useState(0);
  const [gridDimensions, setGridDimensions] = useState({ rows: 6, cols: 8 });

  // Get responsive grid dimensions based on screen size
  const getGridDimensions = () => {
    if (typeof window === "undefined") return { rows: 6, cols: 8 };

    const width = window.innerWidth;
    const height = window.innerHeight;

    if (width < 480) {
      // Mobile: smaller grid
      return { rows: 4, cols: 6 };
    } else if (width < 768) {
      // Tablet: medium grid
      return { rows: 5, cols: 7 };
    } else if (width < 1024) {
      // Small desktop: larger grid
      return { rows: 6, cols: 8 };
    } else {
      // Large desktop: biggest grid
      return { rows: 8, cols: 12 };
    }
  };

  // Initialize grid with random pattern
  const initializeGrid = (rows?: number, cols?: number) => {
    const dimensions = rows && cols ? { rows, cols } : getGridDimensions();
    const newGrid = Array(dimensions.rows)
      .fill(null)
      .map(() =>
        Array(dimensions.cols)
          .fill(null)
          .map(() => (Math.random() > 0.6 ? 1 : 0))
      );
    setGrid(newGrid);
    setGeneration(0);
    setGridDimensions(dimensions);
  };

  // Count living neighbors
  const countNeighbors = (
    grid: number[][],
    row: number,
    col: number
  ): number => {
    let count = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;

        const newRow = row + i;
        const newCol = col + j;

        if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
          count += grid[newRow][newCol];
        }
      }
    }
    return count;
  };

  // Apply Game of Life rules
  const nextGeneration = useCallback((currentGrid: number[][]) => {
    const newGrid = currentGrid.map((row, rowIndex) =>
      row.map((cell, colIndex) => {
        const neighbors = countNeighbors(currentGrid, rowIndex, colIndex);

        // Game of Life rules:
        // 1. Any live cell with 2 or 3 neighbors survives
        // 2. Any dead cell with exactly 3 neighbors becomes alive
        // 3. All other cells die or stay dead
        if (cell === 1) {
          return neighbors === 2 || neighbors === 3 ? 1 : 0;
        } else {
          return neighbors === 3 ? 1 : 0;
        }
      })
    );
    return newGrid;
  }, []);

  // Initialize grid on mount
  useEffect(() => {
    initializeGrid();
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newDimensions = getGridDimensions();
      if (
        newDimensions.rows !== gridDimensions.rows ||
        newDimensions.cols !== gridDimensions.cols
      ) {
        initializeGrid(newDimensions.rows, newDimensions.cols);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [gridDimensions]);

  // Run simulation
  useEffect(() => {
    if (grid.length === 0) return;

    const interval = setInterval(() => {
      setGrid((prevGrid) => {
        const newGrid = nextGeneration(prevGrid);
        setGeneration((prev) => prev + 1);

        // Reset if all cells die or pattern becomes static
        const totalCells = newGrid
          .flat()
          .reduce((sum: number, cell: number) => sum + cell, 0);
        if (totalCells === 0 || generation > 50) {
          setTimeout(() => initializeGrid(), 1000);
        }

        return newGrid;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [grid, generation, nextGeneration]);

  const getCellColor = (cell: number, row: number, col: number): string => {
    if (cell === 0) return "bg-transparent";

    // Cycle through colors based on position and generation
    const colorIndex = (row + col + generation) % 3;
    const colors = [
      "square-yellow dark:square-yellow-dark",
      "square-red dark:square-red-dark",
      "square-blue dark:square-blue-dark",
    ];
    return colors[colorIndex];
  };

  return (
    <div
      className="animated-grid"
      style={{
        gridTemplateColumns: `repeat(${gridDimensions.cols}, 1fr)`,
        gridTemplateRows: `repeat(${gridDimensions.rows}, 1fr)`,
      }}
    >
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`grid-square ${getCellColor(
              cell,
              rowIndex,
              colIndex
            )} transition-all duration-300`}
            style={{
              opacity: cell === 1 ? 1 : 0.1,
              transform: cell === 1 ? "scale(1)" : "scale(0.8)",
            }}
          />
        ))
      )}
    </div>
  );
};

const Home = () => {
  const { theme } = useTheme();

  return (
    <>
      <Head>
        <title>Cristina Vidal - Home</title>
        <meta name="description" content="Home page for Avi's personal site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="dark-logo.svg" />
      </Head>

      <Layout>
        <section id="title" className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <h1 className="flex justify-center md:justify-start name-wave-light dark:name-wave-dark">
                Cristina Vidal Falcon
              </h1>
              <div className="flex justify-center md:justify-start text-center md:text-justify">
                <h3 className="pt-4 font-medium">
                  Multi Engineer (
                  <span className="text-yellow-light dark:text-yellow-dark">
                    {" "}
                    Software{" "}
                  </span>
                  /
                  <span className="text-red-light dark:text-red-dark">
                    {" "}
                    Systems{" "}
                  </span>
                  /
                  <span className="text-blue-light dark:text-blue-dark">
                    {" "}
                    Research{" "}
                  </span>
                  )
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2>About me</h2>
              <p className="py-6 text-justify">
                Hi, I&apos;m Cristina Vidal, a Software Developer from Peru with
                a strong focus on data-driven solutions and Machine Learning. I
                hold a B.Sc. in Systems Engineering and have built most of my
                career in startup environments, where I&apos;ve worked across
                Software Development and Cloud Engineering roles.
              </p>
              <p className="text-justify">
                Outside of work, I enjoy contributing to research groups and
                continuously expanding my knowledge in technology and AI.
                Currently, I&apos;m part of the engineering team{" "}
                <a href="" className="text-blue-light dark:text-blue-dark">
                  @Truora
                </a>
                , where I keep growing as a professional and problem solver.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <GameOfLifeGrid />
            </div>
          </div>
        </section>
        <section id="hobbies">
          <h2>What I enjoy</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 my-12 md:mx-12">
            <div className="flex flex-col items-center mb-12">
              <p className="mb-2">Reading</p>
              <LocalLibraryOutlined />
            </div>
            <div className="flex flex-col items-center">
              <p className="mb-2">Coffee</p>
              <CoffeeMakerOutlined />
            </div>
            <div className="flex flex-col items-center">
              <p className="mb-2">Coding</p>
              <ComputerOutlined />
            </div>
            <div className="flex flex-col items-center">
              <p className="mb-2">Learning</p>
              <SchoolOutlined />
            </div>
            <div className="flex flex-col items-center">
              <p className="mb-2">Exercise</p>
              <FitnessCenterOutlined />
            </div>
            <div className="flex flex-col items-center">
              <p className="mb-2">Driving</p>
              <TwoWheelerOutlined />
            </div>
          </div>
        </section>
        <section id="check" className="pb-8 pt-4">
          <h2 className="mb-12">You should check my....</h2>
          <CheckCard
            image="/check-works.png"
            title="Works Portafolio"
            color="yellow"
            reference="/works"
          />
          <CheckCard
            image="/check-tools.png"
            title="Tools for productivity"
            color="red"
            reference="/tools"
          />
          <CheckCard
            image="/check-works.png"
            title="Source Code of projects"
            color="blue"
            reference="https://github.com/avi-2-avi"
          />
        </section>
        <section id="contact" className="pb-12">
          <h2 className="mb-6">How to reach me</h2>
          <div className="flex flex-row space-x-4 py-2">
            <EmailOutlined />
            <Link href="mailto:av95@proton.me">avicon95@proton.me</Link>
          </div>
          <div className="flex flex-row space-x-4 py-2">
            <LinkedIn />
            <Link href="https://www.linkedin.com/in/cristina-vidal-falcon-1063311b1/">
              Cristina Vidal Falcon
            </Link>
          </div>
          <div className="flex flex-row space-x-4 py-2">
            <Telegram />
            <Link href="tg://resolve?domain=av95">@avicon95</Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
