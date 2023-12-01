const fs = require("fs");

const lines = fs.readFileSync("input.txt", "utf8").split("\n");
/**
 * @param {string[]} lines 
 */
function part1(lines) {
  let result = 0;

  lines.forEach((line) => {
    let num;

    for (let start = 0; start < line.length; start++) {
      const char = line.charAt(start);
      if (!isNaN(char)) {
        num = char;
        break;
      }
    }

    for (let end = line.length - 1; end >= 0; end--) {
      const char = line.charAt(end);
      if (!isNaN(char)) {
        num += char;
        break;
      }
    }

    result += parseInt(num);
  });

  console.log(result);
}

/**
 * @param {string[]} lines 
 */
function part2(lines) {
	const map = {
		"one": "1",
		"two": "2",
		"three": "3",
		"four": "4",
		"five": "5",
		"six": "6",
		"seven": "7",
		"eight": "8",
		"nine": "9",
	}
	const mapped = lines.map(line => {
		return line.replace(/one|two|three|four|five|six|seven|eight|nine/gi, (match) => {
			return map[match];
		})	
	})

	part1(mapped)	
}

part1(lines);
part2(lines);
