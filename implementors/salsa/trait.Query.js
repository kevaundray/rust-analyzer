(function() {var implementors = {};
implementors["base_db"] = [{"text":"impl Query for ParseQuery","synthetic":false,"types":[]},{"text":"impl Query for CrateGraphQuery","synthetic":false,"types":[]},{"text":"impl Query for FileTextQuery","synthetic":false,"types":[]},{"text":"impl Query for FileSourceRootQuery","synthetic":false,"types":[]},{"text":"impl Query for SourceRootQuery","synthetic":false,"types":[]},{"text":"impl Query for SourceRootCratesQuery","synthetic":false,"types":[]}];
implementors["hir_def"] = [{"text":"impl Query for InternFunctionQuery","synthetic":false,"types":[]},{"text":"impl Query for InternFunctionLookupQuery","synthetic":false,"types":[]},{"text":"impl Query for InternStructQuery","synthetic":false,"types":[]},{"text":"impl Query for InternStructLookupQuery","synthetic":false,"types":[]},{"text":"impl Query for InternUnionQuery","synthetic":false,"types":[]},{"text":"impl Query for InternUnionLookupQuery","synthetic":false,"types":[]},{"text":"impl Query for InternEnumQuery","synthetic":false,"types":[]},{"text":"impl Query for InternEnumLookupQuery","synthetic":false,"types":[]},{"text":"impl Query for InternConstQuery","synthetic":false,"types":[]},{"text":"impl Query for InternConstLookupQuery","synthetic":false,"types":[]},{"text":"impl Query for InternStaticQuery","synthetic":false,"types":[]},{"text":"impl Query for InternStaticLookupQuery","synthetic":false,"types":[]},{"text":"impl Query for InternTraitQuery","synthetic":false,"types":[]},{"text":"impl Query for InternTraitLookupQuery","synthetic":false,"types":[]},{"text":"impl Query for InternTypeAliasQuery","synthetic":false,"types":[]},{"text":"impl Query for InternTypeAliasLookupQuery","synthetic":false,"types":[]},{"text":"impl Query for InternImplQuery","synthetic":false,"types":[]},{"text":"impl Query for InternImplLookupQuery","synthetic":false,"types":[]},{"text":"impl Query for ItemTreeQuery","synthetic":false,"types":[]},{"text":"impl Query for CrateDefMapQueryQuery","synthetic":false,"types":[]},{"text":"impl Query for StructDataQuery","synthetic":false,"types":[]},{"text":"impl Query for UnionDataQuery","synthetic":false,"types":[]},{"text":"impl Query for EnumDataQuery","synthetic":false,"types":[]},{"text":"impl Query for ImplDataQuery","synthetic":false,"types":[]},{"text":"impl Query for TraitDataQuery","synthetic":false,"types":[]},{"text":"impl Query for TypeAliasDataQuery","synthetic":false,"types":[]},{"text":"impl Query for FunctionDataQuery","synthetic":false,"types":[]},{"text":"impl Query for ConstDataQuery","synthetic":false,"types":[]},{"text":"impl Query for StaticDataQuery","synthetic":false,"types":[]},{"text":"impl Query for BodyWithSourceMapQuery","synthetic":false,"types":[]},{"text":"impl Query for BodyQuery","synthetic":false,"types":[]},{"text":"impl Query for ExprScopesQuery","synthetic":false,"types":[]},{"text":"impl Query for GenericParamsQuery","synthetic":false,"types":[]},{"text":"impl Query for VariantsAttrsQuery","synthetic":false,"types":[]},{"text":"impl Query for FieldsAttrsQuery","synthetic":false,"types":[]},{"text":"impl Query for AttrsQuery","synthetic":false,"types":[]},{"text":"impl Query for CrateLangItemsQuery","synthetic":false,"types":[]},{"text":"impl Query for LangItemQuery","synthetic":false,"types":[]},{"text":"impl Query for ImportMapQuery","synthetic":false,"types":[]}];
implementors["hir_expand"] = [{"text":"impl Query for AstIdMapQuery","synthetic":false,"types":[]},{"text":"impl Query for InternMacroQuery","synthetic":false,"types":[]},{"text":"impl Query for InternMacroLookupQuery","synthetic":false,"types":[]},{"text":"impl Query for MacroArgTextQuery","synthetic":false,"types":[]},{"text":"impl Query for MacroDefQuery","synthetic":false,"types":[]},{"text":"impl Query for ParseMacroExpansionQuery","synthetic":false,"types":[]},{"text":"impl Query for MacroExpandQuery","synthetic":false,"types":[]},{"text":"impl Query for MacroExpandErrorQuery","synthetic":false,"types":[]},{"text":"impl Query for InternEagerExpansionQuery","synthetic":false,"types":[]},{"text":"impl Query for InternEagerExpansionLookupQuery","synthetic":false,"types":[]},{"text":"impl Query for ExpandProcMacroQuery","synthetic":false,"types":[]}];
implementors["hir_ty"] = [{"text":"impl Query for InferQueryQuery","synthetic":false,"types":[]},{"text":"impl Query for TyQuery","synthetic":false,"types":[]},{"text":"impl Query for ValueTyQuery","synthetic":false,"types":[]},{"text":"impl Query for ImplSelfTyQuery","synthetic":false,"types":[]},{"text":"impl Query for ConstParamTyQuery","synthetic":false,"types":[]},{"text":"impl Query for ImplTraitQuery","synthetic":false,"types":[]},{"text":"impl Query for FieldTypesQuery","synthetic":false,"types":[]},{"text":"impl Query for CallableItemSignatureQuery","synthetic":false,"types":[]},{"text":"impl Query for ReturnTypeImplTraitsQuery","synthetic":false,"types":[]},{"text":"impl Query for GenericPredicatesForParamQuery","synthetic":false,"types":[]},{"text":"impl Query for GenericPredicatesQuery","synthetic":false,"types":[]},{"text":"impl Query for GenericDefaultsQuery","synthetic":false,"types":[]},{"text":"impl Query for InherentImplsInCrateQuery","synthetic":false,"types":[]},{"text":"impl Query for TraitImplsInCrateQuery","synthetic":false,"types":[]},{"text":"impl Query for TraitImplsInDepsQuery","synthetic":false,"types":[]},{"text":"impl Query for InternCallableDefQuery","synthetic":false,"types":[]},{"text":"impl Query for InternCallableDefLookupQuery","synthetic":false,"types":[]},{"text":"impl Query for InternTypeParamIdQuery","synthetic":false,"types":[]},{"text":"impl Query for InternTypeParamIdLookupQuery","synthetic":false,"types":[]},{"text":"impl Query for InternImplTraitIdQuery","synthetic":false,"types":[]},{"text":"impl Query for InternImplTraitIdLookupQuery","synthetic":false,"types":[]},{"text":"impl Query for InternClosureQuery","synthetic":false,"types":[]},{"text":"impl Query for InternClosureLookupQuery","synthetic":false,"types":[]},{"text":"impl Query for AssociatedTyDataQuery","synthetic":false,"types":[]},{"text":"impl Query for TraitDatumQuery","synthetic":false,"types":[]},{"text":"impl Query for StructDatumQuery","synthetic":false,"types":[]},{"text":"impl Query for ImplDatumQuery","synthetic":false,"types":[]},{"text":"impl Query for FnDefDatumQuery","synthetic":false,"types":[]},{"text":"impl Query for FnDefVarianceQuery","synthetic":false,"types":[]},{"text":"impl Query for AdtVarianceQuery","synthetic":false,"types":[]},{"text":"impl Query for AssociatedTyValueQuery","synthetic":false,"types":[]},{"text":"impl Query for TraitSolveQuery","synthetic":false,"types":[]},{"text":"impl Query for ProgramClausesForChalkEnvQuery","synthetic":false,"types":[]}];
implementors["ide_db"] = [{"text":"impl Query for FileSymbolsQuery","synthetic":false,"types":[]},{"text":"impl Query for LibrarySymbolsQuery","synthetic":false,"types":[]},{"text":"impl Query for LocalRootsQuery","synthetic":false,"types":[]},{"text":"impl Query for LibraryRootsQuery","synthetic":false,"types":[]},{"text":"impl Query for LineIndexQuery","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()