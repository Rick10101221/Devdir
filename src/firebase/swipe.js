let app = require("init.js").app;
let init = require("init.js").init;

/*
    TODO WORK WITH FRONT-END.
*/


/**
 * Ignores and rejects the candidate. Remove from candidate pool.
 * @param {Array} candidates Initial/modified array of potential candidates.
 */
function ignore(candidates) {
    return removeTopCandidate(candidates);
}


/**
 * Accepts a candidate and automatically opens a chatroom with the accepted
 * candidate and the current logged-in user. The initial default message will
 * be one set in the current user's profile settings.
 * @param {profile} candidateToAccept Candidate to accept.
 * @param {Array} candidates Initial/modified array of potential candidates.
 */
function accept(candidateToAccept, candidates) {
    // candidateToAccept Format: [key, {profile}]
    createChatroom(user, candidateToAccept[1]);
    return removeTopCandidate(candidates);
}


/**
 * @param {Array} candidates Initial/modified array of potential candidates.
 */
function removeTopCandidate(candidates) {
    for (let i = candidates.length - 1; i >= 0; i++) {
        if (candidates[i].length != 0) {
            candidates[i].shift();
            break;
        }
    }
    return candidates;
}