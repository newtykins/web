import { browser } from '$app/environment';

interface Cache<T> {
    get(): T;
}

const cache = async <T>(key: string, ttl: number, getter: () => Promise<T>): Promise<Cache<T>> => {
    let data = browser ? JSON.parse(localStorage.getItem(key) as string) ?? null : null;
    let timestamp = new Date().getTime();

    if (!data || timestamp > data?.expires) {
        data = await getter();

        if (browser)
            localStorage.setItem(
                key,
                JSON.stringify({
                    ...data,
                    expires: timestamp + ttl
                })
            );
    } else if (data?.expires) {
        delete data.expires;
    }

    return {
        get(): T {
            return data;
        }
    };

    // // Attempt to load initial value

    // if (initialData) {
    //     message = {
    //     }
    // }

    // const executeRun = () => subscribers.forEach(run => executeOneRun(run));
    // const executeOneRun = (run: Subscriber<T>) => run(message);

    // return {
    //     subscribe(run: Subscriber<T>): Unsubscriber {
    //         subscribers.push(run);
    //         executeOneRun(run);

    //         return () => {
    //             subscribers = subscribers.filter(runFunction => runFunction != run);
    //         };
    //     },

    //     set(value: T, ttl: number) {
    //         // const existing = messages.find(msg => msg.data === value);

    //         // const createTimeout = () =>
    //         //     setTimeout(() => {
    //         //         messages = messages.filter(msg => msg.data !== value);
    //         //         executeRun();
    //         //     }, ttl);

    //         // if (existing) {
    //         //     clearTimeout(existing.timeout);

    //         //     existing.timeout = createTimeout();
    //         //     existing.ttl = ttl;
    //         //     existing.repeated++;
    //         // } else {
    //         //     lastMessageId++;
    //         //     const timeoutId = createTimeout();

    //         //     messages.push({
    //         //         data: value,
    //         //         ttl,
    //         //         id: lastMessageId,
    //         //         repeated: 0,
    //         //         timeout: timeoutId
    //         //     });
    //         // }

    //         executeRun();
    //     }
    // };
};

export default cache;
