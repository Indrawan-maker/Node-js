import Mustache from "mustache"
import fs from "fs/promises"

test("Menggunakan Mustache", () => {
    const data = Mustache.render("Hello {{name}}", {name: "Eko"});
    // Hello Eko
    expect(data).toBe("Hello Eko");
});


test("Menggunakan Mustache Cache", () => {
    Mustache.parse("Hello {{name}}");

    const data = Mustache.render("Hello {{name}}", {name: "Eko"});
    // Hello Eko
    expect(data).toBe("Hello Eko");
});


test("Tags", () => {
    const data = Mustache.render("Hello {{name}}, my hobby is {{{hobby}}}", {
        name: "Eko",
        hobby: "<b>Programming</b>"
    });
    // Hello Eko
    expect(data).toBe("Hello Eko, my hobby is <b>Programming</b>");
});

test("Nested Object", () => {
    const data = Mustache.render("Hello {{person.name}}", {
        person: {
            name: "Eko"
        }
    });
    // Hello Eko
    expect(data).toBe("Hello Eko");
});

test("Mustache File", async () => {
    const helloTemplate = await fs.readFile("./templates/hello.mustache")
        .then(data => data.toString());

    const data = Mustache.render(helloTemplate, {
        title: "Programmer Zaman Now"
    });
    console.info(data);
    expect(data).toContain("Programmer Zaman Now");
});


test("Mustache Section Not Show", async () => {
    const helloTemplate = await fs.readFile("./templates/person.mustache")
        .then(data => data.toString());

    const data = Mustache.render(helloTemplate, {});
    console.info(data);
    expect(data).not.toContain("Hello Person");
});

test("Mustache Sections Show", async () => {
    const helloTemplate = await fs.readFile("./templates/person.mustache")
        .then(data => data.toString());

    const data = Mustache.render(helloTemplate, {
        person: {
            name: "Indra"
        }
    });
    console.info(data);
    expect(data).toContain("Hello Person");
});


test("Mustache Sections Data", async () => {
    const helloTemplate = await fs.readFile("./templates/person.mustache")
        .then(data => data.toString());

    const data = Mustache.render(helloTemplate, {
        person: {
            name: "Indra"
        }
    });
    console.info(data);
    expect(data).toContain("Hello Person Indra");
});

test("Inverted Section", async () => {
    const helloTemplate = await fs.readFile("./templates/person.mustache")
        .then(data => data.toString());

    const data = Mustache.render(helloTemplate, {});
    console.info(data);
    expect(data).toContain("Hello Guest");
});


test("List", async () => {
    const helloTemplate = await fs.readFile("./templates/hobbies.mustache")
        .then(data => data.toString());

    const data = Mustache.render(helloTemplate, {
        hobbies: ["Coding", "Olahraga", "Reading"]
    });
    console.info(data);
    expect(data).toContain("Coding");
    expect(data).toContain("Olahraga");
    expect(data).toContain("Reading");
});

test("List Object", async () => {
    const helloTemplate = await fs.readFile("./templates/students.mustache")
        .then(data => data.toString());

    const data = Mustache.render(helloTemplate, {
        students: [
            {name: "Indra" , value: 100},
            {name: "Ridho", value: 90}
                ]
    });
    console.info(data);
    expect(data).toContain("Indra");
    expect(data).toContain("Ridho");
    expect(data).toContain("100");
    expect(data).toContain("90");

});

test("Function", async () => {
    const parameter = {
        name: "Indra",
        upper: () => {
            return (text, render) => {
                return render(text).toUpperCase();
            }
        }
    }

    const data = Mustache.render("Hello {{#upper}}{{name}}{{/upper}}", parameter)
    console.info(data)
    expect(data).toBe("Hello INDRA")
});

test("Comment", async () => {
    const helloTemplate = await fs.readFile("./templates/comment.mustache")
        .then(data => data.toString());

    const data = Mustache.render(helloTemplate, {
        name: "Indra"
    })
    console.info(data);
    expect(data).toContain("Indra");
    expect(data).not.toContain("ini komentar");

});

test("Partials", async () => {
    const headerTemplate = await fs.readFile("./templates/header.mustache")
    .then(data => data.toString());
    const contentTemplate = await fs.readFile("./templates/content.mustache")
    .then(data => data.toString());
    const footerTemplate = await fs.readFile("./templates/footer.mustache")
        .then(data => data.toString());

    const data = Mustache.render(contentTemplate, {
        title: "Indra",
        content: "belajar mustache js"
    }, {
        header: headerTemplate,
        footer: footerTemplate
    })
    console.info(data);
    expect(data).toContain("Indra");
    expect(data).toContain("belajar mustache js");
    expect(data).toContain("powered by Indrawan");

});



