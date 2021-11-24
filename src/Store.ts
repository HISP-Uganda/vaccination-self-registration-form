import { createDomain } from "effector";
import moment from "moment";

const domain = createDomain();

export const changeForm = domain.createEvent<{ [key: string]: any }>();
export const changeData = domain.createEvent<{ key: string, value: any }>();
// const changeData = (key: string, value: any) => {
//     const changedData = { ...data, [key]: value };
//     setData(changedData);
//   }
export const $store = domain.createStore<{ [key: string]: any }>({
  Za0xkyQDpxA: undefined,
  M3trOwAtMqR: "",
  sB1IHYu2xQT: "",
  pCnbIVhxv4j: "",
  Ewi7FUfcHAD: "",
  ZHF7EsKgiaM: "",
  VmftwW8JH3g: "",
  CFbojfdkIIj: "",
  NI0QRzJvQ0k: "",
  ud4YNaOH3Dw: "",
  SSGgoQ6SnCx: "",
  vacFacility: "",
  s2Fmb8zgEem: "",
  YvnFn4IjKzx: "",
  FZzQbW8AWVd: "",
  ciCR6BBvIT4: "",
  zyhxsh0kFx5: "",
  ZpvNoELGUnJ: "",
  pK0K4T2Cq2f: "",
  Bkgeb98v5Ea: "", //self Registered (DE)
  dob: moment(),
  dueDate: moment(),
  orgUnit: undefined,
}).on(changeForm, (_, form) => form)
  .on(changeData, (state, { key, value }) => {
    return { ...state, [key]: value }
  });
