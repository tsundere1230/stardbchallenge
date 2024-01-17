<script>
    export let data;
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

                {#each { length: data.length } as _, i}
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
        <h2 class="text-2xl mb-4">StarDB Challenges - Season 1 Hall Of Fame</h2>
        <table>
            <tr>
                <th class="text-left text-galaxy_purple-50 px-4"
                    >Completed Challenges</th
                >
                <th class="text-left text-galaxy_purple-50 px-4">Challenger</th>
            </tr>
            <tr>
                <td class="px-4">20</td>
                <td class="px-4">Merper, Siune, Ghengooni</td>
            </tr>
            <tr>
                <td class="px-4">19</td>
                <td class="px-4">Lightly, aster</td>
            </tr>
            <tr>
                <td class="px-4">17</td>
                <td class="px-4">Dannyyy, Azathoth</td>
            </tr>
            <tr>
                <td class="px-4">16</td>
                <td class="px-4">Sammy</td>
            </tr>
            <tr>
                <td class="px-4">15</td>
                <td class="px-4">Billi, momohugy, Dava, Bambara, ProPPlayer</td>
            </tr>
            <tr>
                <td class="px-4">13</td>
                <td class="px-4">NickWorth, Chaos, Junebug</td>
            </tr>
            <tr>
                <td class="px-4">12</td>
                <td class="px-4">Carefree Phoenix, Twengdi</td>
            </tr>
            <tr>
                <td class="px-4">11</td>
                <td class="px-4">Jinwu Loi, rzd</td>
            </tr>
            <tr>
                <td class="px-4">10</td>
                <td class="px-4">Czerwony, SikeGirls, Hee Ho, Necro</td>
            </tr>
            <tr>
                <td class="px-4">9</td>
                <td class="px-4">Mikah, Rei, SquareRootOf-1, Kaju</td>
            </tr>
            <tr>
                <td class="px-4">8</td>
                <td class="px-4"
                    >xingped, riorio805, unknowngod, Ethan Thomas, Keevin,
                    tsuntsun, kama-</td
                >
            </tr>
            <tr>
                <td class="px-4">7</td>
                <td class="px-4"
                    >zorus, Herolife, ikun, Rell, Mad Scientist, Solleks,
                    matt_243, busted, Shodan, Meowdoleon, Megamaple</td
                >
            </tr>
            <tr>
                <td class="px-4">6</td>
                <td class="px-4"
                    >Manhell, crab, Merry, karin, STartn't, syroforce, Tenkuu,
                    Meyrime, squidstain, Knightofinferno</td
                >
            </tr>
            <tr>
                <td class="px-4">5</td>
                <td class="px-4"
                    >Scheiren, emii, vani, Cadence, CJ76, kachcat, Soul,
                    CodeSilver, Menace13, osablack</td
                >
            </tr>
            <tr>
                <td class="px-4">4</td>
                <td class="px-4"
                    >White_00, Taigumi, Sakura, vince033, Not-Bob, FxbiFH,
                    Haruhi, Zykei, Paperbag, Beh, bone child, fjfd</td
                >
            </tr>
            <tr>
                <td class="px-4">3</td>
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
