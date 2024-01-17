<script>
    import { math } from "mathlifier";
    import seclusionzone from "$lib/assets/seclusionzone.jpg";
    import robotq1 from "$lib/assets/robotq1.jpg";
    import maozhenclose from "$lib/assets/maozhenclose.jpg";
    import maozhenfar from "$lib/assets/maozhenfar.jpg";
    import cloudfordq2 from "$lib/assets/cloudfordq2.jpg";
</script>

<h1>Star DB Challenge: Season 2 Week 2 - Answers</h1>

<p>Q1:<br /></p>
<p class="answerkey">
    <br />
    There are {@html math("[40]")} or {@html math("[41]")} characters, depending
    if you include Dr. Ratio (but it doesn't matter).<br />
    There are {@html math("[23]")} teleport points in Herta's Space Station.<br
    />
    Maximum Trailblaze Power is {@html math("[240]")} . <br />
    The EXP requirement to go from Level 64 to 65 is {@html math("[26630]")} . The
    cube root of that is approximately {@html math("[30]")} . <br />
    Therefore, the Radius rounds to {@html math("65")} and the Angle rounds to {@html math(
        "270",
    )} .
</p>

<p class="answerkey">
    <br />
    This translates to the following location marked in red:
</p>

<img src={seclusionzone} />

<p class="answerkey">
    <br />
    Interacting with the following robot, and it will say 'Emergency' as the fourth
    word.
</p>

<img src={robotq1} />

<p>Q2:<br /></p>
<p class="answerkey">
    <br />
    "The Line" can be found on Cloudford. This is the only acceptable map for this
    geolocation puzzle.
</p>

<p class="answerkey">
    <br />
    The only way to measure distances in game is to attempt to 'navigate' to a place
    of interest, in this case Maozhen's shop.
</p>

<img src={maozhenclose} />
<img src={maozhenfar} />

<p class="answerkey">
    <br />
    You can do this for the two end points, creating a triangle like this:
</p>

<img src={cloudfordq2} />

<p class="answerkey">
    <br />
    Now you can either assume it's a right-angled triangle or use the cosine rule
    to obtain an answer of approximately {@html math("160-170")} meters. Converting
    to feet and you'll get {@html math("540")} ft., and we gave a
    {@html math("\\pm15")} ft leeway in both directions.
</p>
