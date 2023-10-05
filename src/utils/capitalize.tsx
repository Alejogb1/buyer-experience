export default function capitalizeFirstLetters(sentence: string): string {
    const words: string[] = sentence.split(" ");

    const capitalizedWords: string[] = words.map((word) => {
        if (typeof word === "string") {
            return word[0]?.toUpperCase() + word.substring(1);
        } else {
            return ""; // or handle the case when word is not a string
        }
    });

    return capitalizedWords.join(" ");
}