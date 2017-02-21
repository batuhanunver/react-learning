

interface YesNoQuestion {

}

interface GroupQuestion {

}

interface Question {
  id: string;
  text: string;
  yesno: YesNoQuestion;
  group: GroupQuestion;
}

interface Step {
  id: string;
  first_question: string;
  questions: Question[];
}

