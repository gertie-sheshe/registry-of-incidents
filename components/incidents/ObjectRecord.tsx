import type { IncidentObject } from "@/types";
import { OBJECT_CATALOGUE_TITLE, OBJECT_FIELD_LABELS } from "@/lib/constants";

type ObjectRecordProps = {
  objectRecord: IncidentObject;
};

type ObjectField = {
  label: string;
  value: string;
};

export default function ObjectRecord({ objectRecord }: ObjectRecordProps): JSX.Element {
  const fields: ObjectField[] = [
    { label: OBJECT_FIELD_LABELS.objectType, value: objectRecord.objectType },
    { label: OBJECT_FIELD_LABELS.material, value: objectRecord.material },
    { label: OBJECT_FIELD_LABELS.capacity, value: objectRecord.capacity },
    { label: OBJECT_FIELD_LABELS.condition, value: objectRecord.condition },
    { label: OBJECT_FIELD_LABELS.currentLocation, value: objectRecord.currentLocation },
    { label: OBJECT_FIELD_LABELS.catalogueRef, value: objectRecord.ref },
  ];

  return (
    <section className="mt-8 border border-rule">
      <div className="flex items-center justify-between border-b border-rule bg-[#ECEAE4] px-5 py-3">
        <h3 className="font-serif text-[15px] font-normal text-charcoal">{OBJECT_CATALOGUE_TITLE}</h3>
        <span className="font-mono text-[10px] text-secondary">{objectRecord.ref}</span>
      </div>

      <dl className="grid grid-cols-1 gap-x-8 gap-y-3 p-5 lg:grid-cols-2">
        {fields.map((field) => (
          <div key={field.label}>
            <dt className="mb-0.5 font-sans text-[9px] uppercase tracking-wider text-secondary">
              {field.label}
            </dt>
            <dd className="font-sans text-[13.5px] text-charcoal">{field.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
