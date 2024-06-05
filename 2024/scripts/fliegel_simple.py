# -*- coding: utf-8 -*-
# %%

import re
from csv import DictReader, DictWriter

import spacy

nlp = spacy.load("en_core_web_sm")

# read white people index
i = -1
with open("../data/Fliegel_WhitePeople_setsIsolated_table.tsv", "r") as csv_in:

    # read CSV from in file
    white_people_in = DictReader(csv_in, delimiter="\t")

    # iterate over all factoids
    for row in white_people_in:

        # counter
        i += 1
        if i == 100:
            break

        #
        # linguistic analysis
        #

        # skip empty factoids
        if row["factoid"] and len(row["factoid"]) > 1:

            # clean text
            cleaned_text = re.sub(
                "[ ]+", " ", row["factoid"].replace("No.", "")
            ).strip()

            phrase = nlp(cleaned_text)

            #
            # analyses on token level
            for token in phrase:
                print(f"{token.text}, {token.lemma}_,{token.pos}_")

# %%
