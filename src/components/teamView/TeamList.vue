<script setup lang="ts">
import { groups, selectedGroup } from "@/scripts/teamList";
import { ref } from "vue";
</script>

<template>
    <div class="team-list">
        <div class="groups">
            <div class="group-list container">
                <div
                    class="group container"
                    v-for="(group, index) in groups"
                    @click="selectedGroup = index"
                    :class="{ selected: index === selectedGroup }">
                    <p>{{ group.group }}</p>
                </div>
                <p>
                    {{ groups[selectedGroup].description }}
                </p>
            </div>
        </div>
        <div class="members">
            <h3>{{ groups[selectedGroup].group }} crew:</h3>
            <div class="member-list">
                <div class="member container" v-for="member in groups[selectedGroup].members">
                    <p>{{ member.name }}</p>
                    <span>{{ member.role }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.team-list {
    width: 100vw;
    height: fit-content;
    // background-color: var(--black);
    // border-bottom: 2px solid var(--accent);
    padding: 20px var(--text-margin);

    @media (max-width: 800px) {
        padding: 20px var(--text-margin-mobile);
    }

    .groups {
        display: flex;
        flex-direction: column;

        .group-list {
            display: flex;
            flex-wrap: wrap;

            .selected {
                border: 2px solid var(--accent);
                margin: -2px 8px 8px -2px !important;
            }

            .group {
                width: fit-content;
                word-wrap: nowrap;
                font-size: larger;
                font-weight: bold;
                cursor: pointer;
                margin: 0 10px 10px 0;
                background-color: var(--primary);
                box-shadow: none;
                transition: transform 0.5s;

                &:hover {
                    transform: scale(1.05);
                }
            }
        }
    }

    .members {
        .member-list {
            display: flex;
            flex-wrap: wrap;

            .member p {
                font-size: large;
                font-weight: bold;
            }
        }
    }
}
</style>
