<script setup lang="ts">
import { groups, selectedGroup } from "@/scripts/teamList";
</script>

<template>
    <div class="team-list container">
        <div class="groups">
            <div class="group-list">
                <h3>Explore Teams:</h3>
                <div
                    class="group container"
                    v-for="(group, index) in groups"
                    @click="selectedGroup = index"
                    :class="{ selected: index === selectedGroup }">
                    <p>{{ group.group }}</p>
                </div>
            </div>
            <div class="group-info">
                <h2>{{ groups[selectedGroup].group }}<span>.</span></h2>
                <p>
                    {{ groups[selectedGroup].description }}
                </p>
                <h3>Skills:</h3>
                <ul>
                    <li v-for="skill in groups[selectedGroup].skills">{{ skill }}</li>
                </ul>
                <div class="members">
                    <h3>{{ groups[selectedGroup].group }} crew:</h3>
                    <div class="member-list">
                        <div
                            class="member container"
                            v-for="member in groups[selectedGroup].members">
                            <p>{{ member.name }}</p>
                            <span>{{ member.role }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.team-list {
    height: fit-content;
    margin: 40px var(--text-margin);
    padding: 20px;

    @media (max-width: 800px) {
        margin: 40px var(--text-margin-mobile);
    }

    .groups {
        display: flex;
        flex-direction: row-reverse;

        @media (max-width: 800px) {
            flex-direction: column;

            .group-list {
                margin-bottom: 10px;
            }
        }

        h3 {
            font-size: 26px;
            margin: 10px 0 5px 0;
        }

        .group-list {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;

            .selected {
                border: 2px solid var(--accent);
                margin: -2px 8px 8px -2px !important;
            }

            .group {
                width: 250px;
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

        .group-info {
            padding-right: 20px;
            p {
                font-size: 22px;
            }

            ul {
                margin-top: 0;

                li {
                    font-size: 20px;
                }
            }

            h3 {
                font-size: 26px;
                margin: 10px 0 5px 0;
            }

            .member-list {
                display: flex;
                flex-wrap: wrap;

                .member {
                    background-color: var(--primary);
                    box-shadow: none;
                    margin: 10px 10px 0 0;

                    p {
                        font-weight: bold;
                    }
                }
            }
        }
    }
}
</style>
