import Horse from "./horse";

export default class Race {
	public MaxHorses = 6;
	public Horses = new Array<Horse>();

	/**
	 * Clears the horses array.
	 */
	public NewRace() {
		this.Horses = new Array<Horse>();
	}

	/**
	 * Adds a horse.
	 * @param horse The horse to add.
	 * @returns
	 */
	public AddHorse(horse: Horse) {
		return this.Horses.push(horse);
	}

	/**
	 * Calculates the odds for each horse.
	 */
	public CalculateOdds() {
		if (this.Horses.length < this.MaxHorses) console.warn("Not enough horses in race.");
		else {
			for (const horse of this.Horses) horse.CalculatePercentage();

			let totalPercent = 0;
			for (const horse of this.Horses) totalPercent += horse.OddsPercentage;
			for (const horse of this.Horses) horse.TruePercentage = (horse.OddsPercentage / totalPercent) * 100;
		}
	}

	/**
	 * Gets the summary of the race.
	 */
	public get Summary() {
		const summary = new Array<[percentage: number, truePercentage: number]>();
		for (const horse of this.Horses) summary.push([horse.OddsPercentage, horse.TruePercentage]);
		return summary;
	}
}
