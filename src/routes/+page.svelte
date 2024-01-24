<script>
    import challengers from "$lib/challengers.json";

    import weeks from "$lib/weeks";

    let leaderboard = challengers.reduce(
        (/** @type {{completed: number, names: string[]}[]}*/ curr, val) => {
            let group = curr.find((g) => g.completed == val.completed);
            if (group) {
                group.names.push(val.name);
            } else {
                curr.push({ completed: val.completed, names: [val.name] });
            }
            return curr;
        },
        [],
    );

    leaderboard.sort((x, y) => y.completed - x.completed);
</script>

<div class="space-y-10">
    <h1 class="text-galaxy_purple-250 text-center text-5xl font-bold">
        StarDB Challenges - Season 2
    </h1>

    <div class="flex justify-center">
        <div class="border rounded-md p-4">
            <table>
                <tr>
                    <th class="text-left text-galaxy_purple-50 px-4"
                        >Questions</th
                    >
                    <th class="text-left text-galaxy_purple-50 px-4">Answers</th
                    >
                </tr>

                {#each { length: weeks.length } as _, i}
                    <tr>
                        <td class="px-4"
                            ><a href="/challenge/weeks/{i + 1}">Week {i + 1}</a
                            ></td
                        >
                        <td class="px-4"
                            ><a href="/challenge/answers/{i + 1}"
                                >Week {i + 1}</a
                            ></td
                        ></tr
                    >
                {/each}
            </table>
        </div>
    </div>

    <div>
        <h2 class="text-2xl mb-4">Leaderboard</h2>
        <table class="w-full">
            <tr class="border-b">
                <th class="text-left text-galaxy_purple-50 px-4 text-nowrap"
                    >Completed Challenges</th
                >
                <th class="text-left text-galaxy_purple-50 px-4">Challenger</th>
            </tr>
            {#each leaderboard as entry}
                <tr class="border-b">
                    <td class="px-4 py-2">{entry.completed}</td>
                    <td class="px-4 py-2">{entry.names.join(", ")}</td>
                </tr>
            {/each}
        </table>
    </div>

    <div>
        <h2 class="text-2xl mb-4">StarDB Challenges - Season 1 Hall Of Fame</h2>
        <table class="w-full">
            <tr class="border-b">
                <th class="text-left text-galaxy_purple-50 px-4 text-nowrap"
                    >Completed Challenges</th
                >
                <th class="text-left text-galaxy_purple-50 px-4">Challenger</th>
            </tr>
            <tr class="border-b">
                <td class="px-4 py-2">20</td>
                <td class="px-4 py-2">Merper, Siune, Ghengooni</td>
            </tr>
            <tr class="border-b">
                <td class="px-4 py-2">19</td>
                <td class="px-4 py-2">Lightly, aster</td>
            </tr>
            <tr class="border-b">
                <td class="px-4 py-2">17</td>
                <td class="px-4 py-2">Dannyyy, Azathoth</td>
            </tr>
            <tr class="border-b">
                <td class="px-4 py-2">16</td>
                <td class="px-4 py-2">Sammy</td>
            </tr>
            <tr class="border-b">
                <td class="px-4 py-2">15</td>
                <td class="px-4 py-2"
                    >Billi, momohugy, Dava, Bambara, ProPPlayer</td
                >
            </tr>
            <tr class="border-b">
                <td class="px-4 py-2">13</td>
                <td class="px-4 py-2">NickWorth, Chaos, Junebug</td>
            </tr>
            <tr class="border-b">
                <td class="px-4 py-2">12</td>
                <td class="px-4 py-2">Carefree Phoenix, Twengdi</td>
            </tr>
            <tr class="border-b">
                <td class="px-4 py-2">11</td>
                <td class="px-4 py-2">Jinwu Loi, rzd</td>
            </tr>
            <tr class="border-b">
                <td class="px-4 py-2">10</td>
                <td class="px-4 py-2">Czerwony, SikeGirls, Hee Ho, Necro</td>
            </tr>
            <tr class="border-b">
                <td class="px-4 py-2">9</td>
                <td class="px-4 py-2">Mikah, Rei, SquareRootOf-1, Kaju</td>
            </tr>
            <tr class="border-b">
                <td class="px-4 py-2">8</td>
                <td class="px-4"
                    >xingped, riorio805, unknowngod, Ethan Thomas, Keevin,
                    tsuntsun, kama-</td
                >
            </tr>
            <tr class="border-b">
                <td class="px-4 py-2">7</td>
                <td class="px-4"
                    >zorus, Herolife, ikun, Rell, Mad Scientist, Solleks,
                    matt_243, busted, Shodan, Meowdoleon, Megamaple</td
                >
            </tr>
            <tr class="border-b">
                <td class="px-4 py-2">6</td>
                <td class="px-4"
                    >Manhell, crab, Merry, karin, STartn't, syroforce, Tenkuu,
                    Meyrime, squidstain, Knightofinferno</td
                >
            </tr>
            <tr class="border-b">
                <td class="px-4 py-2">5</td>
                <td class="px-4"
                    >Scheiren, emii, vani, Cadence, CJ76, kachcat, Soul,
                    CodeSilver, Menace13, osablack</td
                >
            </tr>
            <tr class="border-b">
                <td class="px-4 py-2">4</td>
                <td class="px-4"
                    >White_00, Taigumi, Sakura, vince033, Not-Bob, FxbiFH,
                    Haruhi, Zykei, Paperbag, Beh, bone child, fjfd</td
                >
            </tr>
            <tr class="border-b">
                <td class="px-4 py-2">3</td>
                <td class="px-4"
                    >BapHiro, PhantomDrone, Eazyfade, TheTea, Sarlia, Arient,
                    Aki, Vira, POM_POM_ENJOYER CakeAndPals, Gnomechewer, Flint,
                    Jazzyjazz, 星跡(seto), Elyx, TSU_papa, MissCalculations,
                    Arlen</td
                >
            </tr>
        </table>
    </div>

    <div>
        <h3 class="text-xl mb-2">
            Special thanks to the following people for making Season 1
            challenges:<br />
        </h3>
        <p>Maur, Sammy, Julius, Necro, Lightly.</p>
    </div>
</div>
