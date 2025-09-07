import axios from "axios";
import { atom, selector } from "recoil";

export const notifications = atom({
    key: "notifications",
    default: selector({
        key: "notificationsSelector",
        get: async () => {
            const response = await axios.get("http://localhost:3001/notifications")
            return response.data
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({ get }) => {
        const allNotifications = get(notifications);
        return allNotifications.networks +
            allNotifications.jobs +
            allNotifications.notifications +
            allNotifications.messaging
    }
})