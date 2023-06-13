export default async function solve(
	grid: number[][],
	delay: boolean = false
): Promise<number[][] | null> {
	if (delay) await new Promise((resolve) => setTimeout(resolve, 50));
	const emptyCells: [number, number][] = [];
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (grid[i][j] === 0) {
				emptyCells.push([i, j]);
			}
		}
	}

	if (emptyCells.length === 0) {
		return grid;
	}

	const cell: [number, number] = emptyCells.reduce((minCell, currCell) => {
		const [minY, minX] = minCell;
		const [currY, currX] = currCell;
		return possibleValues(currY, currX, grid).size <
			possibleValues(minY, minX, grid).size
			? currCell
			: minCell;
	});

	for (const value of possibleValues(cell[0], cell[1], grid)) {
		grid[cell[0]][cell[1]] = value;
		const solvedGrid = solve(grid, delay);
		if (solvedGrid !== null) {
			return solvedGrid;
		}
		grid[cell[0]][cell[1]] = 0;
	}

	return null;
}

function possibleValues(y: number, x: number, grid: number[][]): Set<number> {
	const impossibleValues = new Set<number>();
	for (let i = 0; i < 9; i++) {
		impossibleValues.add(grid[y][i]);
		impossibleValues.add(grid[i][x]);
	}

	const boxX = Math.floor(x / 3) * 3;
	const boxY = Math.floor(y / 3) * 3;
	for (let i = boxY; i < boxY + 3; i++) {
		for (let j = boxX; j < boxX + 3; j++) {
			impossibleValues.add(grid[i][j]);
		}
	}

	const availableValues = new Set<number>();
	for (let i = 1; i <= 9; i++) {
		if (!impossibleValues.has(i)) {
			availableValues.add(i);
		}
	}

	return availableValues;
}
