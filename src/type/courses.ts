type Term = {
  title: string;
  modules: string[];
};

type BaseCourse = {
  title: string;
  tagline: string;
  description: string;
};

type SoftwareCourse = BaseCourse & {
  media: {
    type: "image" | "video";
    src: string;
  };
  terms: Term[];
};

type MultimediaCourse = BaseCourse & {
  media: {
    type: "image" | "video";
    src: string;
  };
  terms: Term[];
  highlights: string[];
  industryOverview: {
    growth: string;
    insight1: string;
    insight2: string;
    insight3: string;
  };
};

type ArenaCourse = BaseCourse & {
  terms: Term[];
  skillBuilderPrograms: string[];
};

export type Course =
  | SoftwareCourse
  | MultimediaCourse
  | ArenaCourse;