import useRandomInterval, { randomTimeFromInterval } from "~/utils/counter";
import {
    useState
} from "react";
const CounterClock = () => {
    // Update between every 1 and 4 seconds
    const delay: [number, number] = [1000, 4000];
    const [key, setKey] = useState<number>(0);
https://github.com/jsommers/harpoon/tree/master
    useRandomInterval(() => setKey(randomTimeFromInterval(250, 1500)), ...delay);

    return (
        <>
            {key}
        </>
    )

}
export default CounterClock