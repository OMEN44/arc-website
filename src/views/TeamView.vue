<script lang="ts"></script>

<template>
    <div class="team-container">
        <div class="team-header">
            <h1>Meet the team</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
        <div class="team-cards">
            <div class="team-card" v-for="i in 4">
                <img :src="`/team_${i + 1}.jpg`" />
                <div class="team-card-info">
                    <h2>John Doe</h2>
                    <p>CEO</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.team-container {
    background-color: var(--black);
    padding: 50px 0;
    color: var(--white);

    .team-header {
        text-align: center;
        margin-bottom: 50px;

        h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }

        p {
            font-size: 1.2rem;
        }
    }

    .team-cards {
        display: flex;
        justify-content: space-around;
        gap: 20px;

        .team-card {
            background-color: var(--secondary);
            padding: 20px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;

            img {
                width: 100%;
                border-radius: 10px;
            }

            .team-card-info {
                text-align: center;

                h2 {
                    font-size: 1.5rem;
                }

                p {
                    font-size: 1rem;
                }
            }
        }
    }
}
</style>
