import { ref } from "vue";
import teamMembersJSON from "../teamMembers.json";

export const groups = ref<
    Array<{
        group: string;
        description: string;
        skills: Array<string>;
        members: Array<{ name: string; role: string | null }>;
    }>
>(teamMembersJSON);

export const selectedGroup = ref<number>(0);
