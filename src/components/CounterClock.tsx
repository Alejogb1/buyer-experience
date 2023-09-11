import useRandomInterval from "~/utils/counter";
import {
    useState
} from "react";
const CounterClock = () => {
    // Update between every 1 and 4 seconds
    const delay: [number, number] = [1000, 4000];
    const [key, setKey] = useState<number>(0);


    useRandomInterval(() => setKey(Math.random()), ...delay);

    return (
        <>
            View count is {key}
        </>
    )

}
export default CounterClock