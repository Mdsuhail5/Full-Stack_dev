import { atom, selector } from "recoil";

export const networkatom = atom({
    key: "networkatom",
    default: 102
})

export const jobsatom = atom({
    key: "jobsatom",
    default: 0
})

export const messagesatom = atom({
    key: "messagesatom",
    default: 12
})

export const notificationatom = atom({
    key: "notificationatom",
    default: 0
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({ get }) => {
        const networkatomcount = get(networkatom);
        const jobsatomcount = get(jobsatom);
        const messagesatomcount = get(messagesatom);
        const notificationatomcount = get(notificationatom);
        return networkatomcount + jobsatomcount + messagesatomcount + notificationatomcount
    }
})