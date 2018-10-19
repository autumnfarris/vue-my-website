<template>

    <div id="guest-book">
        <p class="header">~ Guest Book ~</p>
            <div id="form">
                <form action="./guest-book.php" method="post">
                    <label for="fname">First Name</label>
                    <input type="text" name="firstname" placeholder="Your name..">
                    <label for="lname">Last Name</label>
                    <input type="text" name="lastname" placeholder="Your last name..">
                    <br>
                    <label for="comments">Additional Comments</label>
                    <textarea placeholder="Please provide any additional comments..." name="comments"></textarea>
                    <input type="submit" value="Submit">
                </form>
            </div>
    </div>

</template>

<script lang="js" src="./guest-book.js" />
<style lang="scss" src="./guest-book.scss" />
