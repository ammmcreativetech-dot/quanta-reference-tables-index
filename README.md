# Quanta Study reference table metadata index

A bilingual index for finding **33 reference resources: 19 main tables and 14 supplements**. It provides titles, groups, column labels, source references and canonical navigation links. The JSON is ready to use without a build or runtime dependency.

Published by **[Quanta Study](https://quanta-study.de/en)**, the learning platform developed and operated by [AM Creative Tech UG (haftungsbeschränkt)](https://quanta-study.de/am-creative-tech). Explore the [public Tafelwerk](https://quanta-study.de/tafelwerk) or the [English formula sheet](https://quanta-study.de/en/formula-sheet) for the online reference resources in context.

## What can I find here?

The index covers units and prefixes, physical constants, chemistry, material properties, astronomy, genetics, nuclear physics and conversions. Each entry links to the matching Quanta reference page; supplementary entries use the actual parent-page anchor. Main tables and supplements are separately identified, so they can be filtered without inflating the formula count.

## Use the data

Download [reference-index.json](./reference-index.json) or clone this repository. This is a GitHub dataset; no npm distribution is claimed.

```sh
git clone https://github.com/ammmcreativetech-dot/quanta-reference-tables-index.git
cd quanta-reference-tables-index
node --test
```

```js
const {getReferenceById, getMainTables, getSupplements} = require('.');
const si = getReferenceById('si-basiseinheiten');
console.log(si.title.en); // SI base units
console.log(si.urls.en);  // https://quanta-study.de/en/formula-sheet/tables/si-basiseinheiten
console.log(getMainTables().length, getSupplements().length); // 19 14
```

## Data contract and sources

Entries contain stable IDs, `kind`, DE/EN title/group/edition, source-declared `checkedOn`, columns, a numeric source `rowCount`, source labels/URLs and DE/EN page/canonical URLs. See the [JSON Schema](./reference-index.schema.json) and [manifest](./manifest.json) for counts, provenance and SHA-256.

This is a metadata index. **Zero table-value rows are included**; 439 source rows remain outside this dataset. Descriptions, original articles, diagrams, worked solutions, learning blueprints and calculator code are also outside the export. `rowCount` describes the source table, not a delivered set of values. The online reference page is the place to inspect those resources.

`checkedOn` is preserved source metadata, not a new review on the export date. Supplements inherit the parent edition/date and do not claim an independent supplementary review. Keep primary-source labels and URLs with displayed references. A citation supports provenance; it is not a claim that the cited institution endorses Quanta Study.

## Frequently asked questions

### Where are the table values?

Use an entry's `urls.de` or `urls.en` for its online resource. The index provides navigation and attribution metadata rather than copies of the numerical tables.

### Are these 33 additional formulas?

They are reference-table metadata entries. Formula records are maintained separately in [quanta-mint-formeln](https://github.com/ammmcreativetech-dot/quanta-mint-formeln).

### How should I cite this index?

Name Quanta Study / AM Creative Tech UG, the dataset version and the data checksum from the manifest. [CITATION.cff](./CITATION.cff) supplies attribution metadata. Preserve source references and indicate changes when redistributing an adaptation.

## Version and license

Version 1.0.0 is the first standalone GitHub index release. Existing source review dates are preserved. Report a concrete incorrect ID, source or URL through Issues.

[CC BY 4.0](./LICENSE), limited to the content and code actually provided here; see [LICENSE-SCOPE.md](./LICENSE-SCOPE.md). Referenced primary works, full Quanta Study learning content and application code remain separate. This repository grants no new rights over linked external material.
