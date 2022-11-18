//Task:get [meaning] in emojipedia then put them to a new array & limit the length of meaning = 100.

import emojipedia from "./emojipedia";

const newArray = emojipedia.map((item) => item.meaning.substring(0,100));
