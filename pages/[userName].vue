<template>
    <div class="userPage">
        <UserInfo />

        <div class="userPage__block">
            <div class="userPage__nav">
                <ReposSort />
                <ReposSearch />
                <BackButton />
            </div>

            <UserRepos />
        </div>
    </div>
</template>